---
name: PDF Extractor
description: Automatically extracts plain text from a given PDF document so the agent can read its contents. It supports both full extraction and targeted keyword searches to preserve context window limits.
---

# PDF Extractor Skill

This skill allows you (the Agent) to natively read and comprehend `.pdf` files provided by the user. Since you cannot natively read binary PDF files using the `view_file` tool, you MUST use this Python script instead whenever the user points you to a PDF.

## How to use

When asked to read, summarize, or extract information from a PDF file, use your `run_command` tool to execute the extraction script:

### 1. Full Extraction (for small PDFs or general summaries)
```bash
python .agent/skills/pdf_extractor/scripts/extract_pdf.py "ABSOLUTE_PATH_TO_PDF"
```

### 2. Contextual Search (for large PDFs or specific queries)
If you only need to know about a specific topic within a massive PDF (e.g., "What is Surface Treatment exactly?"), use the `--search` flag to only return the surrounding context:
```bash
python .agent/skills/pdf_extractor/scripts/extract_pdf.py "ABSOLUTE_PATH_TO_PDF" --search "Surface Treatment"
```

## Troubleshooting
- If the script fails because `pypdf` cannot be installed, try falling back to standard string extraction tools if possible, but this script takes care of auto-installing dependencies via the local `pip`.
- Always use **absolute paths** for the `file_path` argument to prevent working directory resolution issues.
