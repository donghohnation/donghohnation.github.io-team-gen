const Manager = require("../lib/Manager.js")


describe("Manager", () => {

  describe("Testing Constructor for new object", () => {
    it("should create a new employee object", () => {
      const tester = new Manager()
      expect(typeof (tester)).toEqual('object')
    })
  })

  describe('Test for office Object property', () => {
    it('Should create the office property', () => {
      const tester = new Manager('Kevin', 6233, 'lam.kevin91@gmail.com', 'E32')
      expect(tester.officeNumber).toEqual('E32')
    })
  })

  describe("Testing the Manager methods", () => {
    it('should return the office when the getOfficeNumber() method is called', () => {
      const tester = new Manager('Kevin', 6233, 'lam.kevin91@gmail.com', 'E32')
      expect(tester.getOfficeNumber()).toEqual('E32')
    })

    describe("Testing getrole", () => {
      it('should return the Manager when the getrole() method is called', () => {
        const tester = new Manager('Kevin', 6233, 'lam.kevin91@gmail.com', 'UCI')
        expect(tester.getRole()).toEqual('Manager')
      })
    })
  })
})