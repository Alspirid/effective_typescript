/* 
Things to Remember

Prefer Promises to callbacks for better composability and type flow.
Prefer async and await to raw Promises when possible. They produce more concise, straightforward code and eliminate whole classes of errors.
If a function returns a Promise, declare it async.
*/

const ffetch = (): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [1, 2, 3] });
    }, 2000);
  });

const fetchAll = async () => {
  console.log("fetching github users");
  const githubData = await ffetch();
  console.log("fetching MS users");
  const msData = await ffetch();
  return { githubData, msData };
};

fetchAll();
