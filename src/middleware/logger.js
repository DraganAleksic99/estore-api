import { format } from 'date-fns'

export default function logger(req, res, next) {
  const dateTime = `${format(new Date(), `yyyy/MM/dd HH:mm:ss`)}`
  console.log(`${dateTime}  ${req.url}  ${req.method}`)
  next()
}
