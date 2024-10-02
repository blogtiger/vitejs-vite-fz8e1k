window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-1899",
      object_id: "column-1899",
      name: "ID",
      name_without_path: "ID",
      description: "ID",
      is_pk: true,
      is_identity: false,
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
      id: "column-1900",
      object_id: "column-1900",
      name: "ALPHAID",
      name_without_path: "ALPHAID",
      description: "ALPHA ID",
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
      references: [
        { id: "t412", name: "ALPHA", name_show_schema: "dbo.ALPHA" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-1901",
      object_id: "column-1901",
      name: "PETNAME",
      name_without_path: "PETNAME",
      description: "Pet Name",
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
      id: "column-1902",
      object_id: "column-1902",
      name: "PETTYPE",
      name_without_path: "PETTYPE",
      description: "Pet Type",
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
      id: "column-1903",
      object_id: "column-1903",
      name: "BREED",
      name_without_path: "BREED",
      description: "Breed",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "40",
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
      id: "column-1904",
      object_id: "column-1904",
      name: "SEX",
      name_without_path: "SEX",
      description: "Gender",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
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
      id: "column-1905",
      object_id: "column-1905",
      name: "NEUTERED",
      name_without_path: "NEUTERED",
      description: "Neutered",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
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
      id: "column-1906",
      object_id: "column-1906",
      name: "RABIESVAC",
      name_without_path: "RABIESVAC",
      description: null,
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
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
      id: "column-1907",
      object_id: "column-1907",
      name: "RABIESLIC",
      name_without_path: "RABIESLIC",
      description: null,
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "10",
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
      id: "column-1908",
      object_id: "column-1908",
      name: "COLOR1",
      name_without_path: "COLOR1",
      description: "Color",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "6",
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
      id: "column-1909",
      object_id: "column-1909",
      name: "COLOR2",
      name_without_path: "COLOR2",
      description: "Color 2",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "6",
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
      id: "column-1910",
      object_id: "column-1910",
      name: "IDNUM",
      name_without_path: "IDNUM",
      description: "ID  Num",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
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
      id: "column-1911",
      object_id: "column-1911",
      name: "LICENSE",
      name_without_path: "LICENSE",
      description: "License",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
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
      id: "column-1912",
      object_id: "column-1912",
      name: "REGDATE",
      name_without_path: "REGDATE",
      description: "License Date",
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
      id: "column-1913",
      object_id: "column-1913",
      name: "EXPDATE",
      name_without_path: "EXPDATE",
      description: "License Exp Date",
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
      id: "column-1914",
      object_id: "column-1914",
      name: "CMT",
      name_without_path: "CMT",
      description: "CMT",
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
    {
      id: "column-1915",
      object_id: "column-1915",
      name: "PETSTAT",
      name_without_path: "PETSTAT",
      description: "Pet Status",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
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
      id: "column-1916",
      object_id: "column-1916",
      name: "STATDATE",
      name_without_path: "STATDATE",
      description: "STAT Date",
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
      id: "column-1917",
      object_id: "column-1917",
      name: "RLIC",
      name_without_path: "RLIC",
      description: "Rabies Lic #",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "10",
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
      id: "column-1918",
      object_id: "column-1918",
      name: "RLICDATE",
      name_without_path: "RLICDATE",
      description: "Rabies Lic Date",
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
      id: "column-1919",
      object_id: "column-1919",
      name: "RLICEXP",
      name_without_path: "RLICEXP",
      description: "Rabies Lic Exp Date",
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
      id: "column-1920",
      object_id: "column-1920",
      name: "NAME",
      name_without_path: "NAME",
      description: "Owner Name",
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
      id: "column-1921",
      object_id: "column-1921",
      name: "OFCRSAFETY",
      name_without_path: "OFCRSAFETY",
      description: "Officer",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
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
      id: "column-1922",
      object_id: "column-1922",
      name: "CHIP",
      name_without_path: "CHIP",
      description: "Chip",
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
      id: "column-1923",
      object_id: "column-1923",
      name: "FEEPAID",
      name_without_path: "FEEPAID",
      description: "Fee Paid",
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
      id: "column-1924",
      object_id: "column-1924",
      name: "FEEPAIDRABIES",
      name_without_path: "FEEPAIDRABIES",
      description: "Fee Paid  RABIES",
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
      id: "column-1925",
      object_id: "column-1925",
      name: "INACTIVE",
      name_without_path: "INACTIVE",
      description: "Inactive",
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
      id: "column-1926",
      object_id: "column-1926",
      name: "CONTACT2",
      name_without_path: "CONTACT2",
      description: "Pet Contact/Owner 2",
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
      id: "column-1927",
      object_id: "column-1927",
      name: "CONTACT3",
      name_without_path: "CONTACT3",
      description: "Pet Contact/Owner 3",
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
  ],
  relations: [
    {
      name: "FK_PET_alphaID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PET",
      foreign_table_show_schema: "dbo.PET",
      foreign_table_verbose: "PET",
      foreign_table_verbose_show_schema: "dbo.PET",
      foreign_table_object_id: "t85",
      primary_table: "ALPHA",
      primary_table_show_schema: "dbo.ALPHA",
      primary_table_verbose: "ALPHA",
      primary_table_verbose_show_schema: "dbo.ALPHA",
      primary_table_object_id: "t412",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "ALPHAID",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_PETATTACH_PETKEY",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PETATTACH",
      foreign_table_show_schema: "dbo.PETATTACH",
      foreign_table_verbose: "PETATTACH",
      foreign_table_verbose_show_schema: "dbo.PETATTACH",
      foreign_table_object_id: "t25",
      primary_table: "PET",
      primary_table_show_schema: "dbo.PET",
      primary_table_verbose: "PET",
      primary_table_verbose_show_schema: "dbo.PET",
      primary_table_object_id: "t85",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "PETKEY",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_PETPICS_PETID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PETPICS",
      foreign_table_show_schema: "dbo.PETPICS",
      foreign_table_verbose: "PETPICS",
      foreign_table_verbose_show_schema: "dbo.PETPICS",
      foreign_table_object_id: "t208",
      primary_table: "PET",
      primary_table_show_schema: "dbo.PET",
      primary_table_verbose: "PET",
      primary_table_verbose_show_schema: "dbo.PET",
      primary_table_object_id: "t85",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "PETID",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_PET",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        { path: null, name_without_path: "ID", name: "ID", column_id: 1899 },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "PET",
        object_name_show_schema: "dbo.PET",
        object_type: "TABLE",
        object_id: "t85",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "ALPHA",
            object_name_show_schema: "dbo.ALPHA",
            object_type: "TABLE",
            object_id: "t412",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
        ],
      },
    ],
    used_by: [
      {
        object_name: "PET",
        object_name_show_schema: "dbo.PET",
        object_type: "TABLE",
        object_id: "t85",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "PETATTACH",
            object_name_show_schema: "dbo.PETATTACH",
            object_type: "TABLE",
            object_id: "t25",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
          {
            object_name: "PETPICS",
            object_name_show_schema: "dbo.PETPICS",
            object_type: "TABLE",
            object_id: "t208",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
        ],
      },
    ],
  },
  object_id: "t85",
  name: "PET",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Pet Information</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "PET" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
