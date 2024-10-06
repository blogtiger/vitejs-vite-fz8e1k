window.convertToSvelvetNode = function(data) {
    // Extract basic node information
    const title = data.name;
    const id = title.toLowerCase(); // Assuming the id is the lowercase version of the table name
    const position = { x: 400, y: 200 }; // Default position, can be modified
  
    // Prepare the anchors
    const anchors = [];
  
    // Check if relations exist before iterating
    if (data.relations && Array.isArray(data.relations)) {
        data.relations.forEach((relation, index) => {
            relation.constraints.forEach(constraint => {
                anchors.push({
                    type: "input", // Assuming foreign keys are inputs
                    key: constraint.foreign_column,
                    id: `${relation.primary_table.toLowerCase()}_anchor${index + 1}`,
                    connections: [[relation.primary_table.toLowerCase(), `${relation.primary_table.toLowerCase()}_anchor1`]],
                    direction: "west" // Default direction, can be modified
                });
            });
        });
    }
  
    // Check if unique_keys exist before iterating
    if (data.unique_keys && Array.isArray(data.unique_keys)) {
        data.unique_keys.forEach((key, index) => {
            if (key.is_pk) {
                anchors.push({
                    type: "output", // Primary key is typically an output
                    key: key.columns[0].name, // Assuming single-column primary key
                    id: `${id}_anchor${index + 1}`,
                    direction: "west" // Default direction, can be modified
                });
            }
        });
    }
  
    // Check if columns exist before filtering
    const nodeData = data.columns && Array.isArray(data.columns)
        ? data.columns
            .filter((column, index) => index !== 2) // Skipping the third column (index 2)
            .map(column => ({
                key: column.name_without_path,
                type: column.data_type + (column.data_length ? `(${column.data_length})` : ""),
                note: column.description || ""
            }))
        : [];
  
    // Construct the output object
    return {
        title: title,
        id: id,
        position: position,
        anchors: anchors,
        data: nodeData
    };
}


