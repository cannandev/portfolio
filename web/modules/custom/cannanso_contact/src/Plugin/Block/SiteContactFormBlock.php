<?php
/**
 * Created by PhpStorm.
 * User: cbearhoney
 * Date: 10/23/18
 * Time: 12:40 AM
 */

namespace Drupal\cannanso_contact\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\cannanso_contact\Form\SiteContactForm as SiteContactFormService;

/**
 * Class SiteContactFormBlock
 *
 * @Block(
 *  id = "cannanso_contact_form_block",
 *  admin_label = @Translation("Site Contact Form"),
 * )
 *
 * @package Drupal\cannanso_contact\Plugin\Block
 */
class SiteContactFormBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * @var $contact_form;
   */
  protected $contact_form;

  /**
   * SiteContactFormBlock constructor.
   *
   * @param array $configuration
   * @param $plugin_id
   * @param $plugin_definition
   * @param \Drupal\cannanso_contact\Form\SiteContactForm $contact_form
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, SiteContactFormService $contact_form) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->contact_form = $contact_form;
  }

  /**
   * Creates an instance of the plugin.
   *
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   *   The container to pull out services used in the plugin.
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin ID for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   *
   * @return static
   *   Returns an instance of this plugin.
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static (
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('cannanso_contact.form')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
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
}