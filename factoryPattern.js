class Developer {
  askQuestions() {
    console.log('what is design pattern');
  }
}
class Behaviour {
  askQuestions() {
    console.log('ask behaviour questions');
  }
}
class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}
class DeveloperManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}
class BehaviourManager extends HiringManager {
  makeInterviewer() {
    return new Behaviour();
  }
}
const int1 = new DeveloperManager();
int1.takeInterview();
const int2 = new BehaviourManager();
int2.takeInterview();
