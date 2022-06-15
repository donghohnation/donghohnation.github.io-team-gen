const Intern = require("../lib/Intern.js")


describe("Intern", () => {

  describe("Testing Constructor for new object", () => {
    it("should create a new employee object", () => {
      const tester = new Intern()
      expect(typeof (tester)).toEqual('object')
    })
  })

  describe('Test for school Object property', () => {
    it('Should create the school property', () => {
      const tester = new Intern('Kevin', 6233, 'lam.kevin91@gmail.com', 'UCI')
      expect(tester.school).toEqual('UCI')
    })
  })

  describe("Testing the Intern methods", () => {
    it('should return the school when the getSchool() method is called', () => {
      const tester = new Intern('Kevin', 6233, 'lam.kevin91@gmail.com', 'UCI')
      expect(tester.getSchool()).toEqual('UCI')
    })

    describe("Testing getrole", () => {
      it('should return the Intern when the getrole() method is called', () => {
        const tester = new Intern('Kevin', 6233, 'lam.kevin91@gmail.com', 'UCI')
        expect(tester.getRole()).toEqual('Intern')
      })
    })
  })
})