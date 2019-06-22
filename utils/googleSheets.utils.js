import fetch from "isomorphic-unfetch";

export class GoogleSheet {
  convertToJSON(dataset) {
    const data = dataset.values ? dataset.values : dataset;
    if (!Array.isArray(data)) return;
    const headers = data.slice(0, 1).pop();
    const transformData = data.slice(1).reduce((rows, item, index) => {
      const source = headers.reduce((fields, header, index) => {
        fields[header] = !isNaN(item[index])
          ? Number(item[index])
          : item[index];
        return fields;
      }, {});
      rows.push({ id: index, ...source });
      return rows;
    }, []);
    return transformData;
  }

  async getData(sheetTab) {
    if (!sheetTab) {
      throw Error("Need to supply sheetTab");
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${
      process.env.sheetID
    }/values/${sheetTab}?valueRenderOption=FORMATTED_VALUE&key=${
      process.env.API.googleSheet
    }`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      return;
    }
  }
}
