from data import (
    work,
    projects,
    link,
    interests,
    educations,
    skills,
    title,
    description,
    name,
    picture,
    lang,
)

from index import CVTemplate

if __name__ == "__main__":
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(
            CVTemplate(
                    work,
                    projects,
                    link,
                    interests,
                    educations,
                    skills,
                    title,
                    description,
                    name,
                    picture,
                    lang,
            )
        )
