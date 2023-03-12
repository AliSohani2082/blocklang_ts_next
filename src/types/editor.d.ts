interface Condition {
  title: String;
  subtitle: String;
  trigger: [Action];
}

interface Action {
  title: String;
  subtitle: String;
  Arguments: [any];
  isTriggered: boolean;
}
