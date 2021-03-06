jest.unmock('../SubscriptionProvider');

import React from 'react';
import { shallow } from 'enzyme';
import SubscriptionProvider from '../SubscriptionProvider';


describe('SubscriptionProvider', () => {
  it('warns when no environment is supplied', () => {
    const wrapper = shallow(
      <SubscriptionProvider><p /></SubscriptionProvider>
    );
    const error = new Error(
      'SubscriptionProvider: RelayEnvironment could not ' +
      'be found. Please render the SubscriptionProvider under a RootContainer ' +
      'or provide the `environment` prop'
    );
    error.name = 'Invariant Violation';
    const instance = wrapper.instance();
    expect(instance.getEnvironment.bind(instance)).toThrow(error);
  });

  it('does not warn when environment is supplied', () => {
    const wrapper = shallow(
      <SubscriptionProvider environment={{}}><p /></SubscriptionProvider>
    );
    const instance = wrapper.instance();
    expect(instance.getEnvironment.bind(instance)).not.toThrow();
  });
});
