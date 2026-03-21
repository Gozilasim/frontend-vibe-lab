import sys
import argparse
import subprocess
import os

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package, "--quiet"])

try:
    import pypdf
except ImportError:
    print(f"Installing pypdf...", file=sys.stderr)
    install('pypdf')
    import pypdf

def extract_text(pdf_path, search_query=None):
    if not os.path.exists(pdf_path):
        print(f"Error: File not found at {pdf_path}", file=sys.stderr)
        sys.exit(1)

    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        # To avoid massive output, we accumulate text
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
        
        if not search_query:
            # Full extraction, truncate if too large to avoid blowing up context
            max_chars = 15000
            if len(text) > max_chars:
                print(text[:max_chars])
                print(f"\n... [Text truncated at {max_chars} characters. Use --search to find specific content]")
            else:
                print(text)
        else:
            # Contextual search
            idx = text.lower().find(search_query.lower())
            if idx == -1:
                print(f"Query '{search_query}' not found in the document.", file=sys.stderr)
                sys.exit(1)
            else:
                start = max(0, idx - 500)
                end = min(len(text), idx + 2000)
                print(f"--- MATCH FOUND FOR '{search_query}' ---\n")
                print(text[start:end])
                if end < len(text):
                    print("\n... [Output truncated]")

    except Exception as e:
        print(f"Error reading PDF: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract text from PDF for Agent Context")
    parser.add_argument("file_path", help="Absolute path to the PDF file")
    parser.add_argument("--search", "-s", help="Optional keyword to search and extract context around it", default=None)
    
    args = parser.parse_args()
    extract_text(args.file_path, args.search)
