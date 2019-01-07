document.addEventListener("DOMContentLoaded", function() {
  const results = document.querySelector('#electionResults');

  const request = axios({
    methiod: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    reponseType: 'text'
  }).then((response) => {
    response.data.candidates.forEach((candidate) => {
      const candidateResult = document.createElement('p');
      candidateResult.innerHTML = `Candidate Name: ${candidate.name}\n Votes: ${candidate.votes}`;
      results.appendChild(candidateResult);
        console.log(response.data);
    });
  });
});
