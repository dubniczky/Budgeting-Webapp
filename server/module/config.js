import fs from 'fs'
import yaml from 'js-yaml'

const config = yaml.load( fs.readFileSync('config.yml') )

export default config