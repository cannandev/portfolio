<?php
/**
 * Created by PhpStorm.
 * User: cbearhoney
 * Date: 10/22/18
 * Time: 10:18 PM
 */

namespace Drupal\cannanso_contact\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form definition for the site contact form.
 *
 * @package Drupal\cannanso_contact\Form
 */
class SiteContactForm extends FormBase implements FormInterface {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'cannanso_contact_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['name'] = [
      '#type' => 'textfield',
      '#title' => t('Your Name'),
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Send'),
    ];

    return $form;
  }

  /**
   * @param array $form
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->messenger()->addStatus($this->t('Your message has been sent, @name.', ['@name' => $form_state->getValue('name')]));
  }
}