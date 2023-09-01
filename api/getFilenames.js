import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import { isNotJunk } from 'junk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFileNames = () => {
    let files = fs.readdirSync(
        path.join(__dirname, '../frontEnd/public/images/')
    )

    console.log(files.filter(isNotJunk))
}

getFileNames()
