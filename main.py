import data as data

from INUITemplate.index import CVTemplate

if __name__ == "__main__":
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(
            CVTemplate(
                data.EXPERIENCES,
                data.PROJECTS,
                data.LINKS,
                data.INTERESTS,
                data.EDUCATIONS,
                data.SKILLS,
                data.TITLE,
                data.DESCRIPTION,
                data.NAME,
                data.PICTURE,
                data.LANG,
            )
        )
