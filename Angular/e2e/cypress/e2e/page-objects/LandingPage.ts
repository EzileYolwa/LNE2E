/// <reference types="cypress" />
import { Environment } from "../../environments/environment";

export default class LandingPage{

    //locators
    static hero=(): string=>{return"/html/body/app-root/nav/a[2]"}
    static addHero=():string=>{return"//button[@class='add-button']"}
    static verify=():string=>{return"//ul[@class='heroes']"}

    //action methods
    static ClickHero(){
        cy.xpath(this.hero()).click()
    }

    static EnterName() {
		cy.get('input').type('Dr.Doom') 
        cy.wait(3000)
	}

    static VeriifyHero() {
		cy.xpath(this.addHero()).click()
        cy.wait(1000)
        cy.xpath(this.verify()).should('be.visible')
	}

    static clear() {
		cy.get('button[class="clear"]').click()
	}
	
}
