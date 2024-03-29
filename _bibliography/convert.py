
import bibtexparser
from bibtexparser.bwriter import BibTexWriter


def add_field_if_author_in_entry(bibtex_path, pis):
    with open(bibtex_path) as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
    for entry in bib_database.entries:
        if 'author' in entry:
            entry["abbr"] = "<br>x<br>".join(
                [pi_label for pi, pi_label in pis.items() if pi in entry['author']])

        if 'doi' in entry:
            if entry['doi'].startswith('http'):
                entry['website'] = entry['doi']
            else:
                entry['website'] = f"https://doi.org/{entry['doi']}"

    writer = BibTexWriter()
    writer.contents = ['entries']
    writer.indent = '    '

    with open(bibtex_path, 'w') as bibtex_file:
        bibtexparser.dump(bib_database, bibtex_file)


# Usage
add_field_if_author_in_entry(
    'papers.bib', {"Matt": "NOLAN", "Gulsen": "SÜRMELI", "Gülşen": "SÜRMELI"})
