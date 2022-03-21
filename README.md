# Logger

This is a simple package that provides some functionality for logging in a node environment or browser.

## Install and usage

* npm: `npm install @pkm_kailow/logger` 
* yarn: `yarn install @pkm_kailow/logger` 

```javascript
import { Logger } from '@pkm_kailow/logger'

const logger = new Logger(process.env.DEBUG) // E.g. use an environment variable to adjust the logging level

logger.error('Here is an error')
logger.warn('Here is a warning')
logger.info('Here is some info')
logger.debug('Here is debug information')
logger.full('Here is full information')
```
