const Employee = require("../lib/Employee.js")

//* npm test in root directory to run all tests
//* Npm test example.test will run singular test

describe("Employee", () => {

  describe("Testing Constructor for new object", () => {
    it("should create a new employee object", () => {
      const otter = new Employee()
      expect(typeof (otter)).toEqual('object')
    })
  })

  describe("Testing the employee methods", () => {
    it('should return the id when the getId() method is called', () => {
      const otter = new Employee('Bepo', 6233)
      expect(otter.getId()).toEqual(6233)
    })

    it('should return the name of the employee when the getName() function is called', () => {
      const otter = new Employee('Bepo')
      expect(otter.getName()).toEqual('Bepo')
    })

    it('should return the email of the employee when the getEmail() function is called', () => {
      const otter = new Employee('Bepo', 6233, 'otter@floating.com')
      expect(otter.getEmail()).toEqual('otter@floating.com')
    })

    it('should return the role of the employee when the getRole() function is called', () => {
      const otter = new Employee()
      expect(otter.getRole()).toEqual('Employee')
    })
  })
})