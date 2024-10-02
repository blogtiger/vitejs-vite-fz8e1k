window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-2903",
      object_id: "column-2903",
      name: "COMCATEGORY",
      name_without_path: "COMCATEGORY",
      description: "Category",
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
      id: "column-2904",
      object_id: "column-2904",
      name: "COMITEM",
      name_without_path: "COMITEM",
      description: "Item",
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
      id: "column-2905",
      object_id: "column-2905",
      name: "COMDESCRIPTION",
      name_without_path: "COMDESCRIPTION",
      description: "Description",
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
      id: "column-2906",
      object_id: "column-2906",
      name: "COMCOST",
      name_without_path: "COMCOST",
      description: "Cost",
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
    {
      id: "column-2907",
      object_id: "column-2907",
      name: "ACTIVEITEM",
      name_without_path: "ACTIVEITEM",
      description: "Active Flag",
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
      id: "column-2908",
      object_id: "column-2908",
      name: "FAKE_KEY",
      name_without_path: "FAKE_KEY",
      description: "Internal Key",
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
      id: "column-2909",
      object_id: "column-2909",
      name: "STATUS",
      name_without_path: "STATUS",
      description: "Status",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "2",
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
      id: "column-2910",
      object_id: "column-2910",
      name: "VENDOR",
      name_without_path: "VENDOR",
      description: "Vendor",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "100",
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
      id: "column-2911",
      object_id: "column-2911",
      name: "STOCKLOCATION",
      name_without_path: "STOCKLOCATION",
      description: "Location",
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
      id: "column-2912",
      object_id: "column-2912",
      name: "TAXABLE",
      name_without_path: "TAXABLE",
      description: "Taxable",
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
      id: "column-2913",
      object_id: "column-2913",
      name: "QTYONHAND",
      name_without_path: "QTYONHAND",
      description: "Qty on Hand",
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
    {
      id: "column-2914",
      object_id: "column-2914",
      name: "REORDERPT",
      name_without_path: "REORDERPT",
      description: "Reorder Point",
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
    {
      id: "column-2915",
      object_id: "column-2915",
      name: "REORDERAMT",
      name_without_path: "REORDERAMT",
      description: "Reorder Amt",
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
    {
      id: "column-2916",
      object_id: "column-2916",
      name: "AGENCYCOST",
      name_without_path: "AGENCYCOST",
      description: "Agency",
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
    {
      id: "column-2917",
      object_id: "column-2917",
      name: "MARKUPPERCENT",
      name_without_path: "MARKUPPERCENT",
      description: "Markup %",
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
    {
      id: "column-2918",
      object_id: "column-2918",
      name: "MARKUPAMT",
      name_without_path: "MARKUPAMT",
      description: "Markup Amt",
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
    {
      id: "column-2919",
      object_id: "column-2919",
      name: "TAXAMT",
      name_without_path: "TAXAMT",
      description: "Tax Amt",
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
    {
      id: "column-2920",
      object_id: "column-2920",
      name: "AVAILSUSP",
      name_without_path: "AVAILSUSP",
      description: "Avail when Suspended",
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
      id: "column-2921",
      object_id: "column-2921",
      name: "OVERRIDEPRICE",
      name_without_path: "OVERRIDEPRICE",
      description: "Price Override",
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
      id: "column-2922",
      object_id: "column-2922",
      name: "POST_DATE",
      name_without_path: "POST_DATE",
      description: "Post   Date",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "25",
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
      id: "column-2923",
      object_id: "column-2923",
      name: "INDIGENT",
      name_without_path: "INDIGENT",
      description: "Indigent Item",
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
      id: "column-2924",
      object_id: "column-2924",
      name: "FACILITY",
      name_without_path: "FACILITY",
      description: "Facility",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "2",
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
      name: "FK_INM_COMORDERITEMS_COMITEM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INM_COMORDERITEMS",
      foreign_table_show_schema: "dbo.INM_COMORDERITEMS",
      foreign_table_verbose: "INM_COMORDERITEMS",
      foreign_table_verbose_show_schema: "dbo.INM_COMORDERITEMS",
      foreign_table_object_id: "t285",
      primary_table: "INM_COMITEMS",
      primary_table_show_schema: "dbo.INM_COMITEMS",
      primary_table_verbose: "INM_COMITEMS",
      primary_table_verbose_show_schema: "dbo.INM_COMITEMS",
      primary_table_object_id: "t129",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "FAKE_KEY",
          foreign_column_path: null,
          foreign_column: "COMITEM",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_INM_COMITEMS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 2908,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [],
    used_by: [
      {
        object_name: "INM_COMITEMS",
        object_name_show_schema: "dbo.INM_COMITEMS",
        object_type: "TABLE",
        object_id: "t129",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "INM_COMORDERITEMS",
            object_name_show_schema: "dbo.INM_COMORDERITEMS",
            object_type: "TABLE",
            object_id: "t285",
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
  object_id: "t129",
  name: "INM_COMITEMS",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">INM_COMITEMS Information</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "INM_COMITEMS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
