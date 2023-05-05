describe("QA Interview Factorial Webpage", () => {
  beforeEach(async () => {
    await browser.url("https://qainterview.pythonanywhere.com/");
  });

  it("Happy Path", async () => {
    await $("#number").setValue(5);
    await $("#getFactorial").click();
    await browser.pause(20000);
  });

  it("Validate Test Fails when Finding Factorial of Letters", async () => {
    await $("#number").setValue("abcdefg");
    await $("#getFactorial").click();
    await browser.pause(20000);
  });

  //test fails as expected

  it("Validate Test Fails when Finding Factorial of Japanese Characters", async () => {
    await $("#number").setValue("こんにちは世界");
    //Hello World in Japanese
    await $("#getFactorial").click();
    await browser.pause(3000);
  });

  //test fails as expected

  it("Validate Test Fails when Finding Factorial of Negative Number", async () => {
    await $("#number").setValue(-5);
    await $("#getFactorial").click();
    await browser.pause(20000);
  });

  //Number is entered into text box.
  //Test passes, but button is not clicked...
});
