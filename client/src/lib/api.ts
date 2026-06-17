import { VideoItem, DevProject, ContactPayload } from "../types";
import { fallbackVideos, fallbackProjects } from "../data/siteData";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TIMEOUT_MS = 4000;

/**
 * Tries the real backend API first. If there's no BASE_URL configured,
 * the request times out, or the server errors — it silently falls back
 * to the local placeholder data so the site never breaks for visitors.
 */
async function getWithFallback<T>(path: string, fallback: T): Promise<T> {
  if (!BASE_URL) return fallback;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${BASE_URL}${path}`, { signal: controller.signal });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = (await res.json()) as T;
    return data;
  } catch {
    return fallback;
  } finally {
    clearTimeout(timer);
  }
}

export function getVideos(): Promise<VideoItem[]> {
  return getWithFallback<VideoItem[]>("/api/videos", fallbackVideos);
}

export function getProjects(): Promise<DevProject[]> {
  return getWithFallback<DevProject[]>("/api/projects", fallbackProjects);
}

export async function postContact(
  payload: ContactPayload
): Promise<{ ok: boolean; message: string }> {
  if (!BASE_URL) {
    return {
      ok: false,
      message:
        "Contact form isn't connected to a backend yet — email or call me directly for now.",
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "Something went wrong");
    return { ok: true, message: data?.message || "Message sent — thank you!" };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Something went wrong";
    return { ok: false, message: msg };
  }
}
