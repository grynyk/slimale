import {test, expect} from '@playwright/test'

test('My first playwirght test', async ({page}) => {
    await test.step('Go to url', async()=>{
        await page.goto('https://google.com');
})
    await test.step('Search with keywords', async()=>{
        await page.getByLabel('Search', {exact: true}).fill('playwright by testers talk');
    
})
    await test.step('Click on playlist', async()=>{

})
    await test.step('Title validation', async()=>{

})
})