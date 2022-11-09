// This is to be run in mailcrunch:

// UTILITY FUNCTION
const html = String.raw;

const bannerB = ({
    bannerWidth,
    topSliceImgPath,
    banner = {},
    bottomSliceImgPath,
    bkgColour,
    leftBkgColour,
    rightBkgColour
  }) => {
    return html`
      <mj-wrapper mj-class="bg-main">
          <mj-section>
            <mj-column width="${bannerWidth}">
              <mj-image
                css-class="fix-outlook-line-height hide-for-mobile"
                src="${topSliceImgPath}"
                alt=""
              />
            </mj-column>
          </mj-section>
        </mj-wrapper>

        <mj-raw>
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="background-color:${ bkgColour || leftBkgColour };">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0px 0;text-align:center; background-color:#202F60;color:#202F60;">
                                                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
                <td style="width:${bannerWidth}px;" width="${bannerWidth}">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:${bannerWidth}px;" width="${bannerWidth}" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="margin:0px auto;max-width:${bannerWidth}px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0px 0;text-align:center;">

        </mj-raw>

                            <mj-section full-width="full-width">
                              <mj-column width="${bannerWidth}">
                                <mj-image
                                  css-class="fix-outlook-line-height"
                                  src="${ enFr(`${banner.en}`,`${banner.fr}`) }" 
                                  alt="${banner.alt}" 
                                />
                              </mj-column>           
                            </mj-section>

                            <mj-section full-width="full-width">
                              <mj-column width="${bannerWidth}" background-color="${ bkgColour || leftBkgColour }">
                                <mj-image
                                  css-class="fix-outlook-line-height"
                                  src="${bottomSliceImgPath}"
                                  alt=""
                                />
                              </mj-column>    
                            </mj-section>

        <mj-raw>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
                <td style="background-color:${ bkgColour || rightBkgColour };">
                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                  <div style="margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                      <tbody>
                        <tr>
                          <td style="direction:ltr;font-size:0px;padding:0px 0;text-align:center;">

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </mj-raw>
    `;
  };