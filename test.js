<TinaTable topHeader={true}>
    <TinaTableRow>
        <TinaTableCell>
            Field
</TinaTableCell>
        <TinaTableCell>
            Value
</TinaTableCell>
    </TinaTableRow>

    <TinaTableRow>
        <TinaTableCell>
            BSpinBackground
</TinaTableCell>
        <TinaTableCell>
            Background 2048x800
</TinaTableCell>
    </TinaTableRow>
</TinaTable>

    <TinaTable topHeader={true}>
        <TinaTableRow>
            <TinaTableCell>Label</TinaTableCell>
            <TinaTableCell>Desciption</TinaTableCell>
            <TinaTableCell>Sample</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>1. Duplicate OffersTeaser</TinaTableCell>
            <TinaTableCell>Duplicate any existing OffersTeaser file, and rename it to your Ticket Name.</TinaTableCell>
            <TinaTableCell>![Alt text](/img/builds/static-tile/duplicate.png)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>2. EligibilityCriteriaInfo</TinaTableCell>
            <TinaTableCell>Paste this on the HTML `EligibilityCriteriaInfo`</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/2 EligibilityCriteriaInfo.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>3. Title</TinaTableCell>
            <TinaTableCell>Insert the Promo Hub Key Terms H1</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/3 Title.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>4. KeyTermsAndConditions</TinaTableCell>
            <TinaTableCell>Insert here the Promo Hub Key Terms Short Summary</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/4 KeyTermsAndConditions.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>5. TeaserImage</TinaTableCell>
            <TinaTableCell>Insert the Promohub Tiles-800x360 asset uploaded in your Creatives DL</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/5 TeaserImage.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>6. Produt</TinaTableCell>
            <TinaTableCell>Make sure the right category is selected if your Tile is under Casino - Casino should be selected. And, IsHighPriority is Ticked ✅</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/6 Produt.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>7. TeaserClass</TinaTableCell>
            <TinaTableCell>Input `make-me-look-awesome`</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/7 TeaserClass.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>8. CTAs</TinaTableCell>
            <TinaTableCell>In the PrimaryCTA, put the CTA if it is **Opt In**, otherwise put in the MoreInfoCTA like Learn More, Play Now, Claim Now. For the Target, if its opening a different site other than BetMGM choose _blank, else leave it blank.</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/8 CTA 2.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>9. ManualTermsAndCondition</TinaTableCell>
            <TinaTableCell>Should only contain `
<p>Manual Terms and Conditions....</p>
                `</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/9 ManualTermsAndCondition.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>10. Order &amp; OfferBadge</TinaTableCell>
            <TinaTableCell>Order, simple type 0. For the OfferBadge, this Depends on your Promo Type. If its about Deposit Match then the OfferBadge will be **Deposit Match**</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/10 OfferBadge.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>11. Filter &gt; Condition</TinaTableCell>
            <TinaTableCell>Make sure to put your filter for newly build Static Tile. Sample Filter: `QueryString.Get('qa') = 'yourname'`</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/11 Filter.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>12. Publishing Section</TinaTableCell>
            <TinaTableCell>Clear the Publishing Date, and make sure the **Never Publish** is unticked.</TinaTableCell>
            <TinaTableCell>![Alt text](&lt;/img/builds/static-tile/publishing x.png&gt;)</TinaTableCell>
        </TinaTableRow>
        <TinaTableRow>
            <TinaTableCell>13. Screenshot Output</TinaTableCell>
            <TinaTableCell>To check your output go to your State's Promotion Page and insert `qa=yourname` at the end of the URL. Sample: `https://promo.nj.betmgm.com/en/promo/offers?qa=yourname`</TinaTableCell>
            <TinaTableCell>![Screenshot](&lt;/img/builds/static-tile/13 ss.png&gt;)</TinaTableCell>
        </TinaTableRow>
    </TinaTable>
