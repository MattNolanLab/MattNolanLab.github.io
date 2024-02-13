
import bibtexparser


def add_field_if_author_in_entry(bibtex_path, author_name, new_field, new_field_value):
    with open(bibtex_path) as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)

    for entry in bib_database.entries:
        if 'author' in entry and author_name in entry['author']:
            if new_field not in entry:
                entry[new_field] = new_field_value
            else:
                entry[new_field] = entry[new_field] + \
                    "\n x \n" + new_field_value

    with open(bibtex_path, 'w') as bibtex_file:
        bibtexparser.dump(bib_database, bibtex_file)


# Usage
add_field_if_author_in_entry(
    'papers.bib', 'Nolan', 'abbr', 'NOLAN')
add_field_if_author_in_entry(
    'papers.bib', 'Gulsen', 'abbr', 'SÜRMELI')
