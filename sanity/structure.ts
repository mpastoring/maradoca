import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Content Section
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("hero").title("Hero Section"),
              S.documentTypeListItem("pressKit").title("Press Kit"),
            ]),
        ),

      S.divider(),

      // Show remaining document types
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["hero", "pressKit"].includes(item.getId()!),
      ),
    ]);
