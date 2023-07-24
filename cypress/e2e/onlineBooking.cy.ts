///<reference types='cypress'/>
import { resolve } from "cypress/types/bluebird";
import { FlightPage } from "../PageObject/FlightPage/flightDashboard";
import { HomePage } from "../PageObject/SearchDetail/HomePage";
import { FlightLocation, AirportName, CalculatedDays } from "../PageObject/enums/enums";

let homeDashPage: HomePage;
let flightPage : FlightPage;

describe('Online Booking For Dublin to London Stansted', () => {
  homeDashPage = new HomePage();
  flightPage = new FlightPage();

  const departureAndDestination = homeDashPage.getHeader();
  const ChoseDate = homeDashPage.getDatePicker(); 
  const passengersDetail = homeDashPage.getPassengersDetail();
  const flightDetail = flightPage.getFlightDetail();

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  });

  it('OnlineBooking', () => {

    departureAndDestination.clickOnAgree();
    departureAndDestination.searchDepartureAndDestination(FlightLocation.FROM , AirportName.DEPARTURE);
    departureAndDestination.clickOnResult(FlightLocation.FROM); 
    departureAndDestination.searchDepartureAndDestination(FlightLocation.TO , AirportName.DESTINATION);
    departureAndDestination.clickOnResult(FlightLocation.TO);
    cy.log("Search 'Dublin' to 'London Stansted' successfully");

    ChoseDate.selectDatePicker();
    ChoseDate.getNavigateForward();
    ChoseDate.calculateDatePlusDays(CalculatedDays.DepartureDays);
    ChoseDate.getNavigateForward();
    ChoseDate.calculateDatePlusDays(CalculatedDays.ArrivalDays);
    cy.log("Added depart date  Fri, 15 Sept  and return date Sun, 26 Nov ");

    passengersDetail.selectPassengers();
    cy.log("Choose 2 Adults and 1 children and search successfully");

    flightPage.waitForReadiness();
    flightDetail.selectDeparture();
    flightDetail.selectArrival();
    flightDetail.selectFairPrice();
    flightDetail.selectFareUpgrade();
  

  })
  
})