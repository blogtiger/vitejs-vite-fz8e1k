window.convertToSvelvetNode = function(dts, data) {
    // Extract basic node information
    const title = data.name;
    const id = data.name.toLowerCase(); // Assuming the id is the lowercase version of the table name
    
    // Check if dts already contains an item with the same id
    if(title)
    {
        try{
    const existingNode = dts.find(node => node.title === title);
    if (existingNode) {
        return; // If a node with the same id exists, exit the function
    }
}catch(e){
    console.log(e);
    throw e;
}
    }
    else{

        console.log(data);
    }


    const position = { x: 400, y: 200 }; // Default position, can be modified
    // Prepare the anchors
    const anchors = [];
    const columnnames=[];

    // Check if relations exist before iterating
    if (data.relations && Array.isArray(data.relations)) {
        data.relations.forEach((relation, index) => {
            if(relation.primary_table==data.name){
                let keyName=relation.constraints[0].primary_column;
                anchors.push({
                    type: "output", // Primary key is typically an output
                    key: keyName,
                    id: `anchor_${data.name}-${keyName}`.toLocaleLowerCase(),
                    direction: "west" // Default direction, can be modified
                });
                columnnames.push(keyName);
            }
            else{
                let keyName=relation.constraints[0].foreign_column;
                anchors.push({
                    type: "input", // Assuming foreign keys are inputs
                    key: keyName,
                    connections: [[relation.primary_table.toLocaleLowerCase(), `anchor_${relation.primary_table}-${relation.constraints[0].primary_column}`.toLocaleLowerCase()]],
                    direction: "west" // Default direction, can be modified
                });
                columnnames.push(keyName);
            }
        });
    }
  
    // Check if columns exist before filtering
    const nodeData = data.columns && Array.isArray(data.columns)
        ? data.columns
            .filter((column, index) => columnnames.indexOf(column.name)>=0) // Skipping the third column (index 2)
            .map(column => ({
                key: column.name_without_path,
                type: column.data_type + (column.data_length ? `(${column.data_length})` : ""),
                note: column.description || ""
            }))
        : [];
    
    window.tim=window.tim||{};
    window.tim.anchors=window.tim.anchors||[];
    window.tim.anchors.push(...anchors);
  
    let d={
        title: title,
        id: id,
        position: position,
        anchors: anchors,
        data: nodeData
    };
    dts.push(d);
}


