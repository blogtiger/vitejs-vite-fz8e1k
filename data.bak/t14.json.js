window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-360",
      object_id: "column-360",
      name: "CONTROLID",
      name_without_path: "CONTROLID",
      description: "ControlID ID",
      is_pk: false,
      is_identity: false,
      data_type: "int",
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
    {
      id: "column-361",
      object_id: "column-361",
      name: "SCANDATE",
      name_without_path: "SCANDATE",
      description: "Scan Date",
      is_pk: false,
      is_identity: false,
      data_type: "datetime",
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
    {
      id: "column-362",
      object_id: "column-362",
      name: "SCANORDER",
      name_without_path: "SCANORDER",
      description: "Scan Order",
      is_pk: false,
      is_identity: false,
      data_type: "int",
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
    {
      id: "column-363",
      object_id: "column-363",
      name: "SCANBLOCK",
      name_without_path: "SCANBLOCK",
      description: "Scan Block",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "50",
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
      id: "column-364",
      object_id: "column-364",
      name: "ACASEN",
      name_without_path: "ACASEN",
      description: "Case #",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "50",
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
      id: "column-365",
      object_id: "column-365",
      name: "PID",
      name_without_path: "PID",
      description: "Property ID",
      is_pk: false,
      is_identity: false,
      data_type: "int",
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
    {
      id: "column-366",
      object_id: "column-366",
      name: "ITEMNUM",
      name_without_path: "ITEMNUM",
      description: "Item Number",
      is_pk: false,
      is_identity: false,
      data_type: "int",
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
    {
      id: "column-367",
      object_id: "column-367",
      name: "LOCATION",
      name_without_path: "LOCATION",
      description: "Location",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "32",
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
      id: "column-368",
      object_id: "column-368",
      name: "VALIDSCAN",
      name_without_path: "VALIDSCAN",
      description: "Valid Scan",
      is_pk: false,
      is_identity: false,
      data_type: "char",
      data_length: "1",
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
      id: "column-369",
      object_id: "column-369",
      name: "SCANERROR",
      name_without_path: "SCANERROR",
      description: "Scan Error",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "50",
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
      id: "column-370",
      object_id: "column-370",
      name: "FAKE_KEY",
      name_without_path: "FAKE_KEY",
      description: "Internal Primary Key",
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
  ],
  relations: [],
  unique_keys: [
    {
      name: "PK_RECONSCANITEMS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 370,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: { uses: [], used_by: [] },
  object_id: "t14",
  name: "RECONSCANITEMS",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">RECONSCANITEMS Information</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "RECONSCANITEMS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
