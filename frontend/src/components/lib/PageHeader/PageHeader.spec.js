import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from '.';
import { Button } from '..';

describe('Page Header', () => {
  const mockFn = jest.fn();

  const component = (buttonIcon, buttonVariant) => {
    return shallow(
      <PageHeader
        headerText="Header"
        buttonLabel="button"
        buttonIcon={buttonIcon}
        buttonVariant={buttonVariant}
        onButtonClick={mockFn}
      />
    );
  };

  it('should render correctly', () => {
    expect(component()).toMatchSnapshot();
  });

  it('should call the click handler on click event', () => {
    component()
      .find(Button)
      .simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });
});
