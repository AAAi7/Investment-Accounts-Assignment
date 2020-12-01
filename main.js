// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
for(let i=0;i<200;i++)
{
  let random=Math.round(Math.random()*5000);
  //window.alert(random);
  accounts.push(random);
}
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let count=0;
  for(let i=0;i<accounts.length;i++)
  {

    if(accounts[i]>2000 && accounts[i]<4000)
    {
      count++;

    }
  }

  outputEl.innerHTML = "the number of accounts with amounts between $2,000 and $4,000 is "+count;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  for(let i=0;i<accounts.length;i++)
  {
    if(accounts[i]<2000)
    {
      accounts[i]+=500;

    }
  }

  outputEl.innerHTML = "Generous Donor";
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  for(let i=0;i<accounts.length;i++)
  {
    accounts[i]=accounts[i]*0.95;
  }

  outputEl.innerHTML = "Hacker Attack";
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  let max=0;
  let min=5000;
  let sumofall=0;
  let count=accounts.length;

  for(i=0;i<accounts.length;i++)
  {
    sumofall+=accounts[i];
    if(accounts[i]>max)
      max=accounts[i];
    if(accounts[i]<min)
      min=accounts[i];

  }
  let average=Math.round(sumofall/count);
  

  outputEl.innerHTML = "Max amount is "+max+"$ | Min amount is "+min+"$ | Average balance is "+average+"$";
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  let random=Math.round(Math.random()*5000);
  accounts.push(random);


  outputEl.innerHTML = "A new account was added with an opening of "+random+"$";
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  for(let i=0;i<accounts.length;i++)
  {
    if(accounts[i]<500)
    {
      accounts.splice(i,i+1);
    }
  }

  outputEl.innerHTML = "Remove Low Accounts";
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  let moneytaken=0;
  let accountsreceived=0;
  for(i=0;i<accounts.length;i++)
  {
    if(accounts[i]>4000)
    {
      moneytaken+=400;
      accounts[i]=accounts[i]-400;
    }
    if(accounts[i]<1000)
      accountsreceived++;
  }
  let fund=moneytaken/accountsreceived;
  for(let i=0;i<accounts.length;i++)
  {
    if(accounts[i]<1000)
    {
      accounts[i]=accounts[i]+400;
    }

  }

  outputEl.innerHTML = "Robin Hood. "+accountsreceived+" accuont(s) recieved "+fund+"$ each";
}
