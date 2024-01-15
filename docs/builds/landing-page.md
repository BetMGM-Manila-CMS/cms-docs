# Landing Page

:::info[SiteCore Path]
sitecore > content > Vanilla.Mobile > state/brand > Promo > casino or sports or poker
:::

There are two (2) types of Landing Page: Static Landing Page, and Motion Landing Page. The Latter requires video assets which needs to be uploaded in vimeo, as sitecore only needs the URL of the motion asset.

### Sample Static Landing Page

![Landing Page Sample](<../../static/img/builds/landing-page/Landing Page Page.png>)

### Sample Motion Landing Page
![Motion Landing Page Sample](<../../static/img/builds/landing-page/motion 1.png>)


## Start Building...
To Build a Landing Page, go to its respective path as seen in the beginning of the page. And duplicate the PromoSimpleContent (file) you need. For Static LP, look for PromoSimpleContent that has this content (refer to image below):  

![Alt text](<../../static/img/builds/landing-page/static lp dup.png>)

For the Motion LP, look for this:  

![Alt text](<../../static/img/builds/landing-page/motion lp dup.png>)

As there are a different Code for these LP, as seen below:  

![Alt text](<../../static/img/builds/landing-page/difference.png>)

### Hero

In this section, you'll edit all images the Landing Page requires. First, you'll need the image URL.  

#### Static LP Hero
| Key       | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| bg        | asset with **2048x800** size                                                                                    |
| img       | asset with **1080x515** size, or the **PNG image that includes the brand logo, promo image, and promo details** |
| img-alt   | You can use the **H1 & H2** from the Copy                                                                       |
| mobile-bg | asset with **1080x1080** size                                                                                   |

#### Motion LP Hero
| Key       | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| bg        | still image with **2228x720** size, with promo details (as seen in the sample).                                                                                      |
| mobile-bg       | still image with **1080x1080** size, with promo details (as seen in the sample) |
| video-bg   | vimeo link with size **2228x720** then add `?autoplay=1&amp;loop=1&amp;background=1` at the end of the link                                                                     |
| video-bg-mobile | vimeo link with size **1080x1080** then add `?autoplay=1&amp;loop=1&amp;background=1` at the end of the link                                                                                |


To get the image URL go to your creatives, **click the asset** you need, then go to media and **click Open**. It will open a new tab showing the asset **copy the URL of the image** (refer to image below). As for the vimeo link, it is usually given on your Task on Monday else get it from your sub-lead.

![Landing Page Sample](../../static/img/builds/landing-page/url.png)

Then you'll paste the URL on its respective key:

#### Static LP Hero
![Landing Page Sample](../../static/img/builds/landing-page/Hero.png)

#### Motion LP Hero
In case the video-bg, video-bg-mobile are not in the Hero. You can manually add it by **Clicking the Configure Keys** then add these missing keys.  

![Alt text](<../../static/img/builds/landing-page/motion hero.png>)

For the Next Steps (Steps, and Terms) both Static and Motion have the same format/process.

### Steps

Here, you'll insert the Steps [ACQ 1-2-3] from the Copy.

![Landing Page Sample](../../static/img/builds/landing-page/steps.png)

> :warning:**Take Note:** Steps should not have any punctation marks at the end, **except Exclamation Point**.

### Terms

This section is where you'll insert the Terms & Condition of the Promotion. Please mind that in the Landing Page, Titles are in **UPPERCASE, No Colon**, and if its under sports **instead of bullet it should be numbers**.

#### Casino

![Landing Page Sample](../../static/img/builds/landing-page/terms.png)

#### Sports

![Landing Page Sample](../../static/img/builds/landing-page/sports.png)
