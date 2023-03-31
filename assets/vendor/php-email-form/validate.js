const form = document.querySelector('#contact_form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let thisForm = this;
    thisForm.querySelector('.loading').classList.add('d-block');
    thisForm.querySelector('.error-message').classList.remove('d-block');
    thisForm.querySelector('.sent-message').classList.remove('d-block');
    Email.send({
            SecureToken: "95f8799c-b236-465f-972d-0ec68b04b46c",
            To: 'adriancatindig1216@gmail.com',
            From: 'portfolioemail1201@gmail.com',
            Subject: thisForm.elements.subject.value,
            Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>
            <title>
            </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width">
            <style type="text/css">body, html {
              margin: 0px;
              padding: 0px;
              -webkit-font-smoothing: antialiased;
              text-size-adjust: none;
              width: 100% !important;
            }
              table td, table {
              }
              #outlook a {
                padding: 0px;
              }
              .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
                line-height: 100%;
              }
              .ExternalClass {
                width: 100%;
              }
              @media only screen and (max-width: 480px) {
                 table tr td table.edsocialfollowcontainer {width: auto !important;} table, table tr td, table td {
                  width: 100% !important;
                }
                img {
                  width: inherit;
                }
                .layer_2 {
                  max-width: 100% !important;
                }
                .edsocialfollowcontainer table {
                  max-width: 25% !important;
                }
                .edsocialfollowcontainer table td {
                  padding: 10px !important;
                }
              }
            </style>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
          </head><body style="padding:0; margin: 0;background: #efefef">
            <table style="height: 100%; width: 100%; background-color: #efefef;" align="center">
              <tbody>
                <tr>
                  <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 30px; padding-bottom: 30px; background-color: #efefef;">
                    <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                    <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;">
                      <tbody>
                        
                        
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr><tr><td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edimg" style="padding: 20px; box-sizing: border-box; text-align: center;"><img src="https://api.smtprelay.co/userfile/ffaccfeb-0010-4e9e-af06-45c6f1a4af1a/Untitled_design.png" alt="Image" style="border-width: 0px; border-style: none; max-width: 366px; width: 100%;" width="366"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #444444; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><span style="color: #0000ff;">​</span>
                                      <p class="style1 text-center" style="text-align: center; margin: 0px; padding: 0px; color: #424a60; font-size: 28px; font-family: Helvetica, Arial, sans-serif;">${thisForm.elements.subject.value}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #444444; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                      <p style="margin: 0px; padding: 0px;">${thisForm.elements.message.value}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #444444; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                      <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">
                                        From: <strong>${thisForm.elements.name.value}
                                        </strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #444444; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                      <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">
                                        Email: <strong>${thisForm.elements.email.value}
                                        </strong>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                            <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                            <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                              <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                                <tbody>
                                  <tr>
                                    <td valign="top" class="emptycell" style="padding: 10px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </body></html>`
        })
        .then(message => {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.add('d-block');
            console.log('success')
            thisForm.reset();
        })
        .catch((error) => {
            displayError(thisForm, error);
        });
});

function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
}