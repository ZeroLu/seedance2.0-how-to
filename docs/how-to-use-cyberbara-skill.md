# Ultimate AI Image/Video Generator: End-User Guide (English)

This guide is for regular users who want to generate images with the `ultimate-ai-image-video-generator` skill, without digging into internal implementation details.

It covers:
- How to install the skill
- How to get your CyberBara API key
- How to write prompts that generate better results
- Typical use cases
- A complete first-image workflow

---

## 1. What This Skill Does

The skill wraps CyberBara Public API v1 into a practical CLI flow:
1. Discover models
2. (Optional) upload reference images
3. Quote credit cost before submission
4. Submit image/video generation tasks
5. Poll task status until final output URL is ready

Core entrypoint:

```bash
python3 scripts/cyberbara_api.py --help
```

Service endpoint:

```text
https://cyberbara.com
```

> [Image Placeholder 1] Workflow diagram: `models -> quote -> generate -> wait -> output`

---

## 2. How to Install the Skill

### 2.1 If the skill is already available

If your environment already lists `ultimate-ai-image-video-generator` in `AGENTS.md`, you can skip installation.

### 2.2 Install via the Skill Installer (recommended)

Use the system `skill-installer` scripts:

```bash
# List installable skills
python3 ~/.codex/skills/.system/skill-installer/scripts/list-skills.py

# Install from openai/skills (example path format)
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo openai/skills \
  --path skills/.curated/ultimate-ai-image-video-generator
```

Or install from a direct GitHub URL:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --url https://github.com/<owner>/<repo>/tree/<ref>/<path-to-skill>
```

After installation, restart Codex so the new skill is loaded.

> [Image Placeholder 2] Screenshot: skill list + successful install output

---

## 3. How to Get a CyberBara API Key

1. Open `https://cyberbara.com/settings/apikeys`
2. Create a new API key
3. Copy it once and store it safely
4. Export it in terminal:

```bash
export CYBERBARA_API_KEY="<your_api_key>"
```

The CLI resolves API key in this order:
1. `--api-key`
2. `CYBERBARA_API_KEY`
3. `~/.config/cyberbara/api_key`
4. interactive prompt

> [Image Placeholder 3] Screenshot: CyberBara API key page

---

## 4. First Image in 5 Minutes (Step-by-Step)

Set your skill directory first:

```bash
SKILL_DIR="$HOME/.codex/skills/ultimate-ai-image-video-generator"
```

### Step 1: Check available image models

```bash
python3 "$SKILL_DIR/scripts/cyberbara_api.py" models --media-type image
```

### Step 2: Quote credits before generation

```bash
python3 "$SKILL_DIR/scripts/cyberbara_api.py" quote --json '{
  "model":"nano-banana-pro",
  "media_type":"image",
  "scene":"text-to-image",
  "prompt":"A cute kitten dancing, 3D cartoon style, dynamic pose, clean background",
  "options":{"aspect_ratio":"16:9","resolution":"1k"}
}'
```

### Step 3: Generate the image task

```bash
python3 "$SKILL_DIR/scripts/cyberbara_api.py" generate-image --json '{
  "model":"nano-banana-pro",
  "scene":"text-to-image",
  "prompt":"A cute kitten dancing, 3D cartoon style, dynamic pose, cinematic lighting, cheerful mood",
  "options":{"aspect_ratio":"16:9","resolution":"1k"}
}'
```

By default, the CLI asks for explicit confirmation before spending credits.

### Step 4: Wait for final result

```bash
python3 "$SKILL_DIR/scripts/cyberbara_api.py" wait --task-id <TASK_ID> --interval 5 --timeout 900
```

When status becomes `success`, use the output URL from `output.images`.

> [Image Placeholder 4] Screenshot: `pending -> success` wait logs and final image URL

---

## 5. How to Prompt Better (Practical Template)

Use this prompt formula:

`Subject + Action + Style + Camera/Framing + Lighting + Background + Quality cues`

Example:

```text
A cute orange kitten dancing on two legs, 3D cartoon style, full-body shot, soft studio lighting, clean pastel stage background, high detail, joyful expression
```

### Prompt tips that improve consistency

- Be explicit about style: `3D cartoon`, `anime`, `photorealistic`, `pixel art`
- Be explicit about framing: `full body`, `close-up`, `wide shot`
- Be explicit about scene control: `plain background`, `city street`, `indoor studio`
- Keep one main subject for stable output
- Avoid conflicting instructions in one sentence

### Resolution and aspect ratio examples

- `options.resolution`: `1k`, `2k`, `4k`
- `options.aspect_ratio`: `1:1`, `16:9`, `9:16` (depending on model support)

> [Image Placeholder 5] Side-by-side: weak prompt vs strong prompt result

---

## 6. Typical Use Cases

### 6.1 Social media creatives

- Goal: fast hero images and thumbnails
- Suggested setup: `text-to-image`, `16:9`, `1k`, vivid style prompts

### 6.2 Character concept exploration

- Goal: generate many style variants of one character
- Suggested setup: batch requests via `--file`

### 6.3 Product marketing visuals

- Goal: e-commerce hero shots and campaign scenes
- Suggested setup: `image-to-image` with reference product image in `options.image_input`

### 6.4 Storyboard keyframes for video pre-production

- Goal: quickly draft scene keyframes before full video generation
- Suggested setup: consistent scene template + multiple shot prompts

> [Image Placeholder 6] Grid collage: 4 use-case outputs

---

## 7. Useful Commands Cheat Sheet

```bash
# Models
python3 "$SKILL_DIR/scripts/cyberbara_api.py" models --media-type image
python3 "$SKILL_DIR/scripts/cyberbara_api.py" models --media-type video

# Optional upload for image-to-image
python3 "$SKILL_DIR/scripts/cyberbara_api.py" upload-images ./ref1.png ./ref2.jpg

# Credit and billing
python3 "$SKILL_DIR/scripts/cyberbara_api.py" quote --json '{...}'
python3 "$SKILL_DIR/scripts/cyberbara_api.py" balance
python3 "$SKILL_DIR/scripts/cyberbara_api.py" usage --limit 20

# Generate and track
python3 "$SKILL_DIR/scripts/cyberbara_api.py" generate-image --json '{...}'
python3 "$SKILL_DIR/scripts/cyberbara_api.py" generate-video --json '{...}'
python3 "$SKILL_DIR/scripts/cyberbara_api.py" task --task-id <TASK_ID>
python3 "$SKILL_DIR/scripts/cyberbara_api.py" wait --task-id <TASK_ID> --interval 5 --timeout 900
```

---

## 8. Common Issues and Fixes

- `api_key_required` / `invalid_api_key`
  - Verify key value and environment export
- `insufficient_credits`
  - Run `quote` first, then recharge if needed
- `scene_not_supported`
  - Check `models` output and use a supported scene
- `invalid_request`
  - Ensure required fields exist and public options are inside `options.*`
- `task_not_found`
  - Re-check `task_id` and environment/domain

---

## 9. Next Step

If you want, the next version of this guide can include:
1. A full image pack for Placeholder 1-6
2. A beginner prompt library (30+ ready-to-copy prompts by use case)
