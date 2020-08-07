import fs from 'fs'

export default class JSONFileManager {
  
  private fileName: string

  constructor (fileName: string) {
    this.fileName = fileName
  }

  readDatabase(): any {
    try{
      const fileData: string = fs.readFileSync(this.fileName).toString()
      return JSON.parse(fileData)

    } catch(e) {
      console.log('Erro: ' + e.message)
      return []
    }
  }

  writeToDatabase(data: any): void {
    try {
      const dataAsString: string = JSON.stringify(data, null, 2)
      fs.writeFileSync(this.fileName, dataAsString)
      console.log("Sucesso ao salvar.")
    } catch (e) {
      console.log("Erro: " + e.message)
    }
  }
}