# MPP
The MPP is the Promo Landing Page contains the description of the promotion, and on how to join for the customers.
## Creating The MPP
Navigate to the MPP directory:
:::info[SiteCore Path]
Content > Vanilla.Mobile > State/Brand > MobilePortal-v1.0 > Promotions > Casino
:::
Duplicate the `mpp-template-manila` and then rename it to your `url`. Also rename the child component with your `url`.
## Parent MPP
Click on "Edit rule", click on the highlighted text and it will open another box. Navigate to your MPP's child and select it, then press OK. Save.

//insert image
## Child MPP
Fill the required fields as instructed.
### Required Fields
| Field | Value |
| --- | --------- |
| PromotionTitle | Promohub H1 |
| Image | Media URL link |
| ImageHeadline | Promotional Dates |
### DetailedDescription
:::info
Check CTA Docs Page for an exhaustive list of options.
:::
<ol>
<li>Click the "Edit HTML" to open the HTML Editor.</li>
<li>First `<p>` tag, replace the text with the `Promotion Description`.</li>
<li>Second `<p>` tag, CTA will depend on the ticket.</li>
<li>How It Works section, place each content of the `How To Participate` in the `TnCs`.</li>
<li>Eligible Games section, open the `Smart Links Tool` for your state and brand to search for the eligible games. Copy the game URL and replace in the text:</li>
</ol>

```
<div class="game-thumb d-inline">
<a href="!!M2.Casino/games/launchng/[url]"><img alt="[Game Name]" src="https://casinogames.nj.betmgm.com/htmllobby/images/newlmticons/square/[url].jpg" width="100" height="100" style="border:5px solid #FFFFFF;" /></a>
</div>
```
:::tip
Change the link's state & brand depending on your ticket.
:::
If the game is NETENT or DGC, add class to `<div>` tags:
| Device | Class |
| --- | --------- |
| Desktop | ```data-content-filter="NOT Device.IsMobile AND NOT Device.IsTablet"``` |
| Mobile | ```data-content-filter="Device.IsMobile OR Device.IsTablet"``` |

For mobile versions, append the following to url:

| Game | Value |
| --- | --------- |
| DGC | mobile |
| NETENT | touch |

### Terms And Conditions
:::info
Check the Cleaning Documents page for a thorough guide on how to clean the TnCs copy.
:::