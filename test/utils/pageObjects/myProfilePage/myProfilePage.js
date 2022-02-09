const BasePage = require("../basePage/basePage");
const Collection = require("../baseElements/baseCollection");
const logger = require('../../../config/logger.config.js');
const EC = protractor.ExpectedConditions;

class MyProfilePage extends BasePage {
  constructor() {
    super();
    this.recentBadgesSection = new Collection("Recent badges", "CSS", ".RecentBadges_badge__X_jPW");
    this.categorizedBadges = new Collection("Categorized Badges", "CSS", "ul.CategorizedBadges_badgesList__z8gqy");
    this.appriciationsSection = new Collection("Appreciations", "CSS", "#badges-container > div.CategorizedBadges_categorizedBadges__1nlXD > div:nth-child(4) > ul > li");

  };

  async waitForRecentBadges() {
    const firstRecentBadge = this.recentBadgesSection.collection.get(0);
    logger.info(`Waiting for ${this.recentBadgesSection.elementName}"`);
    await browser.wait(EC.visibilityOf(firstRecentBadge), 10000);
  }

  getCountOfRecentBadges() {
    return this.recentBadgesSection.getCount();
  }

  getCountOfAppriciationsBadges() {
    return this.appriciationsSection.getCount();
  }
};

module.exports = MyProfilePage;