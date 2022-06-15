const Engineer = require("../lib/Engineer.js")


describe("Engineer", () => {

  describe("Testing Constructor for new object", () => {
    it("should create a new employee object", () => {
      const tester = new Engineer()
      expect(typeof (tester)).toEqual('object')
    })
  })

  describe('Test for Github Object property', () => {
    it('Should create the github property', () => {
      const tester = new Engineer('Kevin', 6233, 'lam.kevin91@gmail.com', 'Godoflaugh')
      expect(tester.github).toEqual('Godoflaugh')
    })
  })

  describe("Testing the engineer methods", () => {
    it('should return the github when the gitHub() method is called', () => {
      const tester = new Engineer('Kevin', 6233, 'lam.kevin91@gmail.com', 'Godoflaugh')
      expect(tester.getGithub()).toEqual('Godoflaugh')
    })

    describe("Testing the engineer methods", () => {
      it('should return the Engineer when the getrole() method is called', () => {
        const tester = new Engineer('Kevin', 6233, 'lam.kevin91@gmail.com', 'Godoflaugh')
        expect(tester.getRole()).toEqual('Engineer')
      })
    })
  })
})