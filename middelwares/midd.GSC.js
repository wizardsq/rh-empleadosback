
  const GenerarSQL_csvInsert = (data) => {
    const lines = data.split('\n');
    const fields = lines[0].split(',');
    let values
    try {
        values = lines.slice(1).map((line) => {
        const cells = line.split(',');
        return `(${cells.map((cell, i) => {
          if ((fields[i] === 'createdAt' || fields[i] === 'updatedAt') && !cell) {
            return 'NOW()';
          }
          return `'${cell}'`;
          }).join(',')})`;
        })
    }catch(error){
        console.error('Error al generar valores:', error);
        values = [];
    }
     if(Array.isArray(values)){
        return `INSERT INTO empleados (${fields.join(',')}) VALUES ${values.join(',')};`;
     }else {
        console.error('Valores inválidos:', values);
        return '';
     }
    
      
      
};

// exports.GenerarSQL_csvUpdate = () => {
//     const lines = data.split('\n');
//     const fields = lines[0].split(',');
//     const values = lines.slice(1).map((line) => {
//     const cells = line.split(',');
//     return `(${cells.map((cell, i) => {
//         if ((fields[i] === 'createdAt' || fields[i] === 'updatedAt') && !cell) {
//           return `NOW()`;
//         } else{
//             return `'${cell}'`;
//         }}).join(',')})`;
//     }) 
    
//     return `Update empleados set ${values.join(',')};`;
// }

module.exports = GenerarSQL_csvInsert