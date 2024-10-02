window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-8537",
      object_id: "column-8537",
      name: "DESCX",
      name_without_path: "DESCX",
      description: "GeoJSON Menu Layer Name",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "100",
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
      id: "column-8538",
      object_id: "column-8538",
      name: "DATEX",
      name_without_path: "DATEX",
      description: "Date entered",
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
      id: "column-8539",
      object_id: "column-8539",
      name: "TIMEX",
      name_without_path: "TIMEX",
      description: "Time entered",
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
      id: "column-8540",
      object_id: "column-8540",
      name: "USERID",
      name_without_path: "USERID",
      description: "User ID",
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
      id: "column-8541",
      object_id: "column-8541",
      name: "AGCODE",
      name_without_path: "AGCODE",
      description: "Agency Code",
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
      id: "column-8542",
      object_id: "column-8542",
      name: "ICONURL",
      name_without_path: "ICONURL",
      description: "Icon URL",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "2048",
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
      id: "column-8543",
      object_id: "column-8543",
      name: "GEOJSONDATA",
      name_without_path: "GEOJSONDATA",
      description: "GeoJSON Data",
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
      id: "column-8544",
      object_id: "column-8544",
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
    {
      id: "column-8545",
      object_id: "column-8545",
      name: "FIELDNAME",
      name_without_path: "FIELDNAME",
      description: "FieldName for Map Label",
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
      id: "column-8546",
      object_id: "column-8546",
      name: "BACKCOLOR",
      name_without_path: "BACKCOLOR",
      description: "Background Color",
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
      id: "column-8547",
      object_id: "column-8547",
      name: "FORECOLOR",
      name_without_path: "FORECOLOR",
      description: "Foreground Color",
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
      id: "column-8548",
      object_id: "column-8548",
      name: "ZOOMLEVEL",
      name_without_path: "ZOOMLEVEL",
      description: "Zoom Level",
      is_pk: false,
      is_identity: false,
      data_type: "float",
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
      name: "PK_MAPDATAGEOJSON",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 8544,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: { uses: [], used_by: [] },
  object_id: "t358",
  name: "MAPDATAGEOJSON",
  subtype: "TABLE",
  is_user_defined: false,
  description: null,
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "MAPDATAGEOJSON" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
