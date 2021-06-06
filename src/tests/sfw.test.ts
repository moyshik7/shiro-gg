import 'mocha'
import * as chai from 'chai'
import { Avatar, Avatars, Blush } from './../main'

chai.use(require('chai-match'))
const expect = chai.expect

describe('Avatar test', () => {
    it('should return an avatar link as ImageObject', async () => {
        const data = await Avatar()
        return expect(data.url).to.match(/^(http|https)\:\/\/shiro\.gg\/images\/avatars\//)
    })
})
describe('Avatars test', () => {
    it('should return an avatar link as ImageObject', async () => {
        const data = await Avatars()
        return expect(data.url).to.match(/^(http|https)\:\/\/shiro\.gg\/images\/avatars\//)
    })
})
describe('Blush test', () => {
    it('should return an blushing image link as ImageObject', async () => {
        const data = await Blush()
        return expect(data.url).to.match(/^(http|https)\:\/\/shiro\.gg\/images\/blush\//)
    })
})


