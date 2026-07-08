# Flow — voice dictation, anywhere

A self-contained **Wispr Flow–style** voice-to-text app. Press the mic (or hold
**Space**), talk naturally, and Flow transcribes + cleans up your words — removing
filler ("um/uh"), adding punctuation and capitalization you never spoke, then hands
you polished text to copy anywhere.

It's a single HTML file. No build step, no server, no account. Everything runs in
your browser and **nothing leaves your device** unless you opt into AI polish.

## Use it

Just open `flow/index.html` in a browser:

```
# from the repo root
open flow/index.html          # macOS
xdg-open flow/index.html      # Linux
start flow/index.html         # Windows
```

Or drag the file onto a Chrome/Edge/Safari tab. On first use, allow microphone access.

> **Two transcription engines** (Settings → Transcription engine):
> - **On-device (Web Speech)** — default, instant, fully private. Works in
>   **Chrome, Edge, and Safari** (desktop + mobile).
> - **Cloud (OpenAI Whisper)** — higher accuracy, works in **any** browser
>   (including Firefox). Records your audio and sends it to OpenAI's
>   `/v1/audio/transcriptions` using the key you provide.

## What it does

| | |
|---|---|
| 🎙️ **Push-to-talk** | Click the mic, or **hold Space** to talk and release to stop. **Esc** stops anytime. |
| 🔀 **Two engines** | On-device Web Speech (free/private) or cloud OpenAI Whisper (more accurate, any browser). |
| ✨ **Auto-clean** | Strips filler words, fixes spacing, capitalizes sentences and `I`. Toggle on the editor or in settings. |
| ⌨️ **Spoken punctuation** | Say "new line", "new paragraph", "comma", "period", "question mark", "open/close quote", etc. |
| 🌍 **100+ languages** | Pick your dictation language in Settings — from English and Spanish to Japanese, Arabic and Hindi. |
| 🧠 **Command mode** | Reshape text with one click: *make formal / casual / concise*, *bullet points*, *summarize*, *turn into email*, *fix grammar*. |
| 📋 **Copy & auto-copy** | One-tap copy, or auto-copy to clipboard the moment you stop talking. |
| 🕘 **History** | Your last 50 dictations, saved locally — copy, reload, or delete each. |
| 📊 **Live stats** | Word count, character count, and real-time words-per-minute. |
| 🌗 **Light / dark** | Theme toggle, remembered across sessions. |

## Command mode: local vs. AI

The command-mode buttons work **offline** with rule-based transforms out of the box.
For higher-quality rewrites you can plug in an LLM key under **Settings → AI polish**:

- **OpenAI-compatible** — e.g. `gpt-4o-mini`
- **Anthropic (Claude)** — e.g. `claude-haiku-4-5-20251001`

Your key is stored **only in this browser's `localStorage`** and is sent directly to
the provider you choose — never to any Flow server (there isn't one). Leave the
provider on **Local** to keep everything fully on-device.

## About the "Wispr Flow API"

Wispr Flow does publish a developer API (`api-docs.wisprflow.ai`) — a cloud
speech-to-text endpoint that returns style-aware, filler-stripped text. It's a
paid, key-gated service. This project reproduces the *experience* without that
dependency by using the browser's on-device speech recognition plus a local
cleanup engine, so it's free and works immediately. If you later want to swap in a
cloud STT backend (Wispr, Deepgram, Whisper, etc.), the transcription lives in one
place — `newRecognizer()` in `index.html` — and can be replaced with a `fetch` to
any provider.

## Privacy

- Transcription happens via your browser/OS speech service.
- Text, settings and history stay in `localStorage` on your machine.
- No network requests are made unless you turn on AI polish with your own key.
