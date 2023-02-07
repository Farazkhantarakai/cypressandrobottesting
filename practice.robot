*** Settings ***
Library   Selenium2Library

*** Variables ***
${BROWSER}    chrome

*** Test Cases ***
verify if the home is reachable or not
    Open Browser    https://icp.edu.pk  ${BROWSER}
    Maximize Browser Window 
    Wait Until Page Contains  Islamia College Peshawar
    Close Browser

verify if homepage is reachable or not
    Open Browser   https://icp.edu.pk  ${BROWSER}
    Maximize Browser Window
    Wait Until Page Contains  Islamia College Peshawar
    Input Text  css=#gsc-i=id1  jobs
    Press Keys  css=#gsc-i-idl  ENTER
    Wait Until Page Contains   Sort by:
    Close Browser



*** Keywords *** 