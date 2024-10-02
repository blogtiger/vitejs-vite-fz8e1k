window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-2205",
      object_id: "column-2205",
      name: "INTERNALAPIURL",
      name_without_path: "INTERNALAPIURL",
      description: "Internal API URL",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1024",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2206",
      object_id: "column-2206",
      name: "EXTERNALAPIURL",
      name_without_path: "EXTERNALAPIURL",
      description: "External API URL",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1024",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2207",
      object_id: "column-2207",
      name: "RICOGPSCONFIG",
      name_without_path: "RICOGPSCONFIG",
      description: "RICO GPS JSON Configuration",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "MAX",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2208",
      object_id: "column-2208",
      name: "RICOAPICONFIG",
      name_without_path: "RICOAPICONFIG",
      description: "RICO API JSON Configuration",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "MAX",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2209",
      object_id: "column-2209",
      name: "FAKE_KEY",
      name_without_path: "FAKE_KEY",
      description: null,
      is_pk: true,
      is_identity: true,
      data_type: "int",
      data_length: null,
      is_nullable: false,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2210",
      object_id: "column-2210",
      name: "AGENCIES",
      name_without_path: "AGENCIES",
      description: "List of Agencies for this record (comma delimited)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "500",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2211",
      object_id: "column-2211",
      name: "RIMSCONFIG",
      name_without_path: "RIMSCONFIG",
      description: "RIMS Configuration",
      is_pk: false,
      is_identity: false,
      data_type: "text",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
  ],
  relations: [],
  unique_keys: [
    {
      name: "PK_RICOCONFIG",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 2209,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: { uses: [], used_by: [] },
  object_id: "t104",
  name: "RICOCONFIG",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">RICOCONFIG Information</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "RICOCONFIG" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
