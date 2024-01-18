import {
  CategoryType,
  INVOCATIONS,
  Invocation,
  getCategoryType,
  getIconSrc,
  getInvocationsByCategory,
  getInvocationId,
  decodeInvocations,
  encodeInvocations,
  getRaidMode,
} from './invocations';

import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

const getInvocationElement = (invocation: Invocation): HTMLButtonElement => (
  document.querySelector(`#${getInvocationId(invocation)}`)!
);

const isInvocationElementActive = (button: HTMLButtonElement): boolean => (
  button.classList.contains('active')
);

const updateInvocation = (invocation: Invocation, active: boolean): void => {
  const button = getInvocationElement(invocation);
  button.querySelector('img')!.src = getIconSrc(invocation, active);

  if (active) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
};

const updateRaidLevelAndURL = (updateFromHash = false): void => {
  const activeInvocations =
    updateFromHash
      ? decodeInvocations(window.location.hash)
      : INVOCATIONS.filter(invocation => isInvocationElementActive(getInvocationElement(invocation)));

  if (updateFromHash) {
    activeInvocations.forEach(invocation => updateInvocation(invocation, true));
  } else {
    window.location.replace(`#${encodeInvocations(activeInvocations)}`);
  }

  const raidLevel = activeInvocations.reduce((raidLevel, invocation) => (
    raidLevel + invocation.raidLevelModifier
  ), 0);

  const raidMode = getRaidMode(raidLevel);

  document.querySelector('.raid-level')!.innerHTML = `
    <span>Raid level: ${raidLevel}</span>
    <span>
      Mode:
      <span class="${raidMode.toLowerCase()}">
        ${raidMode}
      </span>
    </span>
  `;
};

INVOCATIONS.forEach(invocation => {
  const button = document.createElement('button');
  button.id = getInvocationId(invocation);
  button.classList.add('invocation');

  button.innerHTML = `
    <img src=${getIconSrc(invocation)} draggable="false">
    <span class="type">${invocation.type}<span>
  `;

  button.addEventListener('click', () => {
    const active = !isInvocationElementActive(button);

    if (active && getCategoryType(invocation) === CategoryType.SINGLE) {
      getInvocationsByCategory(invocation.category).forEach(inv => updateInvocation(inv, false));
    }

    updateInvocation(invocation, active);
    updateRaidLevelAndURL();
  });

  app.appendChild(button);
});

updateRaidLevelAndURL(true);

window.addEventListener('hashchange', () => updateRaidLevelAndURL(true));
