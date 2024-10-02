window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-5858",
      object_id: "column-5858",
      name: "BOOKNO",
      name_without_path: "BOOKNO",
      description: "Booking Number",
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
        { id: "t69", name: "INM_BOOKING", name_show_schema: "dbo.INM_BOOKING" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-5859",
      object_id: "column-5859",
      name: "MEDSHIFT",
      name_without_path: "MEDSHIFT",
      description: "Shift",
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
      id: "column-5860",
      object_id: "column-5860",
      name: "MEDDESC",
      name_without_path: "MEDDESC",
      description: "Instructions/Comment",
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
      id: "column-5861",
      object_id: "column-5861",
      name: "QTY",
      name_without_path: "QTY",
      description: "Qty",
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
      id: "column-5862",
      object_id: "column-5862",
      name: "MEDCOST",
      name_without_path: "MEDCOST",
      description: "Unit Cost",
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
      id: "column-5863",
      object_id: "column-5863",
      name: "MEDTOTAL",
      name_without_path: "MEDTOTAL",
      description: "Cost Total",
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
      id: "column-5864",
      object_id: "column-5864",
      name: "MEDBEGINS",
      name_without_path: "MEDBEGINS",
      description: "Start Date",
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
      id: "column-5865",
      object_id: "column-5865",
      name: "MEDENDS",
      name_without_path: "MEDENDS",
      description: "End Date",
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
      id: "column-5866",
      object_id: "column-5866",
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
      id: "column-5867",
      object_id: "column-5867",
      name: "ACTIVE",
      name_without_path: "ACTIVE",
      description: "Active",
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
      id: "column-5868",
      object_id: "column-5868",
      name: "DOSAGE",
      name_without_path: "DOSAGE",
      description: "Dosage",
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
      id: "column-5869",
      object_id: "column-5869",
      name: "PURCHASETIME",
      name_without_path: "PURCHASETIME",
      description: "Bill time",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "5",
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
      id: "column-5870",
      object_id: "column-5870",
      name: "PURCHASEDATE",
      name_without_path: "PURCHASEDATE",
      description: "Bill Date",
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
      id: "column-5871",
      object_id: "column-5871",
      name: "BILLINGAGENCY",
      name_without_path: "BILLINGAGENCY",
      description: "Billing Agency",
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
      id: "column-5872",
      object_id: "column-5872",
      name: "BILLINMATE",
      name_without_path: "BILLINMATE",
      description: "Bill Inmate",
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
      id: "column-5873",
      object_id: "column-5873",
      name: "DRUGNAME_GENERIC",
      name_without_path: "DRUGNAME_GENERIC",
      description: "Drug Name (Generic)",
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
      id: "column-5874",
      object_id: "column-5874",
      name: "DRUGNAME",
      name_without_path: "DRUGNAME",
      description: "Drug Name",
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
      id: "column-5875",
      object_id: "column-5875",
      name: "DOSAGETYPE",
      name_without_path: "DOSAGETYPE",
      description: "Dosage Type",
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
      id: "column-5876",
      object_id: "column-5876",
      name: "DOSAGEFORM",
      name_without_path: "DOSAGEFORM",
      description: "Dosage Form",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "20",
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
      id: "column-5877",
      object_id: "column-5877",
      name: "MEDSCHEDULE",
      name_without_path: "MEDSCHEDULE",
      description: "Schedule",
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
      id: "column-5878",
      object_id: "column-5878",
      name: "ADMINROUTE",
      name_without_path: "ADMINROUTE",
      description: "Admin Route",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "15",
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
      id: "column-5879",
      object_id: "column-5879",
      name: "NOENDDATE",
      name_without_path: "NOENDDATE",
      description: "No End",
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
      id: "column-5880",
      object_id: "column-5880",
      name: "EXCEEDQTY",
      name_without_path: "EXCEEDQTY",
      description: "Meds not to Exceed Qty",
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
      id: "column-5881",
      object_id: "column-5881",
      name: "TIMEBETWEEN",
      name_without_path: "TIMEBETWEEN",
      description: "Time Between Doses",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "5",
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
      id: "column-5882",
      object_id: "column-5882",
      name: "ASNEEDED",
      name_without_path: "ASNEEDED",
      description: "Medication as Needed Flag",
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
      id: "column-5883",
      object_id: "column-5883",
      name: "PRESCRIPTION",
      name_without_path: "PRESCRIPTION",
      description: "Prescription Number",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "20",
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
      id: "column-5884",
      object_id: "column-5884",
      name: "QTYONHAND",
      name_without_path: "QTYONHAND",
      description: "Quantity on Hand",
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
      id: "column-5885",
      object_id: "column-5885",
      name: "REFILLQTY",
      name_without_path: "REFILLQTY",
      description: "Refill Quantity",
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
  relations: [
    {
      name: "FK_INM_MEDLIST_BOOKNO",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INM_MEDLIST",
      foreign_table_show_schema: "dbo.INM_MEDLIST",
      foreign_table_verbose: "INM_MEDLIST",
      foreign_table_verbose_show_schema: "dbo.INM_MEDLIST",
      foreign_table_object_id: "t257",
      primary_table: "INM_BOOKING",
      primary_table_show_schema: "dbo.INM_BOOKING",
      primary_table_verbose: "INM_BOOKING",
      primary_table_verbose_show_schema: "dbo.INM_BOOKING",
      primary_table_object_id: "t69",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "BOOKNO",
          foreign_column_path: null,
          foreign_column: "BOOKNO",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_INM_MEDLIST",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 5866,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "INM_MEDLIST",
        object_name_show_schema: "dbo.INM_MEDLIST",
        object_type: "TABLE",
        object_id: "t257",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "INM_BOOKING",
            object_name_show_schema: "dbo.INM_BOOKING",
            object_type: "TABLE",
            object_id: "t69",
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
    used_by: [],
  },
  object_id: "t257",
  name: "INM_MEDLIST",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Need a description</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "INM_MEDLIST" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
