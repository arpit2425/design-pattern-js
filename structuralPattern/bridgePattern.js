//Consider you have a website with different pages and you are supposed to allow the user to change the theme. What would you do? Create multiple copies of each of the pages for each of the themes or would you just create separate theme and load them based on the user's preferences? Bridge pattern allows you to do the second

//Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

class AboutPage {
  constructor(theme) {
    this.theme = theme;
  }
  buildPage() {
    console.log(`About page is ready with ${this.theme.getColor()} theme`);
  }
}
class HomePage {
  constructor(theme) {
    this.theme = theme;
  }
  buildPage() {
    console.log(`Home page is ready with ${this.theme.getColor()} theme`);
  }
}

class DarkTheme {
  getColor() {
    return 'Dark colour';
  }
}
class LightTheme {
  getColor() {
    return 'Light colour';
  }
}
class AquaTheme {
  getColor() {
    return 'Blue colour';
  }
}
const homePage = new HomePage(new DarkTheme());
homePage.buildPage();
const aboutPage = new AboutPage(new LightTheme());
aboutPage.buildPage();
